// Import New Relic at the very top of the file (before any other imports)
import 'newrelic';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint (monitored by New Relic)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Sample API routes
app.get('/api/status', (req, res) => {
  res.json({ 
    message: 'SNFactor API is running',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Sample data endpoint
app.get('/api/data', async (req, res) => {
  try {
    // Simulate async operation (database query, external API call, etc.)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    res.json({
      data: [
        { id: 1, name: 'Sample Item 1', value: 42 },
        { id: 2, name: 'Sample Item 2', value: 24 }
      ],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    // New Relic will automatically capture this error
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Sample POST endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Simulate processing (email sending, database save, etc.)
    await new Promise(resolve => setTimeout(resolve, 200));
    
    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: Math.random().toString(36).substr(2, 9)
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

// Custom New Relic attributes example
app.get('/api/custom-metrics', (req, res) => {
  // Add custom attributes to New Relic transaction
  if (typeof newrelic !== 'undefined') {
    newrelic.addCustomAttribute('customEndpoint', 'metrics');
    newrelic.addCustomAttribute('userAgent', req.get('User-Agent'));
  }
  
  res.json({ 
    message: 'Custom metrics recorded',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  
  // New Relic will automatically capture unhandled errors
  res.status(500).json({ 
    error: 'Internal server error',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 SNFactor API server running on port ${PORT}`);
  console.log(`📊 New Relic monitoring: ${process.env.NEW_RELIC_APP_NAME || 'snfactor'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});