export interface ProductData {
  parentAsin: string;
  childAsin: string;
  title: string;
  sku: string;
  sessions: number;
  sessionsB2B: number;
  conversionRate: number;
  sessionPercentageB2B: number;
  pageViews: number;
  pageViewsB2B: number;
  pageViewsPercentage: number;
  pageViewsPercentageB2B: number;
  recommendedBidPercentage: number;
  recommendedBidPercentageB2B: number;
  orderedQuantity: number;
  orderedQuantityB2B: number;
  productSessionPercentage: number;
  productSessionPercentageB2B: number;
  salesRevenue: number;
  salesRevenueB2B: number;
  totalOrderItems: number;
  totalOrderItemsB2B: number;
}

export const parseCSVData = (csvText: string): ProductData[] => {
  const lines = csvText.split('\n');
  const data: ProductData[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV line with proper handling of quoted fields
    const fields = parseCSVLine(line);
    if (fields.length < 22) continue;
    
    try {
      const product: ProductData = {
        parentAsin: fields[0],
        childAsin: fields[1],
        title: fields[2].replace(/"/g, ''),
        sku: fields[3],
        sessions: parseNumber(fields[4]),
        sessionsB2B: parseNumber(fields[5]),
        conversionRate: parsePercentage(fields[6]),
        sessionPercentageB2B: parsePercentage(fields[7]),
        pageViews: parseNumber(fields[8]),
        pageViewsB2B: parseNumber(fields[9]),
        pageViewsPercentage: parsePercentage(fields[10]),
        pageViewsPercentageB2B: parsePercentage(fields[11]),
        recommendedBidPercentage: parsePercentage(fields[12]),
        recommendedBidPercentageB2B: parsePercentage(fields[13]),
        orderedQuantity: parseNumber(fields[14]),
        orderedQuantityB2B: parseNumber(fields[15]),
        productSessionPercentage: parsePercentage(fields[16]),
        productSessionPercentageB2B: parsePercentage(fields[17]),
        salesRevenue: parseCurrency(fields[18]),
        salesRevenueB2B: parseCurrency(fields[19]),
        totalOrderItems: parseNumber(fields[20]),
        totalOrderItemsB2B: parseNumber(fields[21])
      };
      
      data.push(product);
    } catch (error) {
      console.warn(`Error parsing line ${i + 1}:`, error);
    }
  }
  
  return data;
};

const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
};

const parseNumber = (value: string): number => {
  const cleaned = value.replace(/[",]/g, '');
  return parseInt(cleaned) || 0;
};

const parsePercentage = (value: string): number => {
  const cleaned = value.replace(/["%]/g, '');
  return parseFloat(cleaned) || 0;
};

const parseCurrency = (value: string): number => {
  const cleaned = value.replace(/[US$",]/g, '');
  return parseFloat(cleaned) || 0;
};

export const calculateTotalMetrics = (data: ProductData[]) => {
  return data.reduce((acc, product) => ({
    totalSessions: acc.totalSessions + product.sessions,
    totalPageViews: acc.totalPageViews + product.pageViews,
    totalRevenue: acc.totalRevenue + product.salesRevenue,
    totalOrders: acc.totalOrders + product.orderedQuantity,
    totalProducts: acc.totalProducts + 1
  }), {
    totalSessions: 0,
    totalPageViews: 0,
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0
  });
};