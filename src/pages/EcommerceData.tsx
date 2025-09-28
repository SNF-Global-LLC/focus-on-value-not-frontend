import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, Package, Eye, TrendingUp, Search, Download } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ProductData, parseCSVData, calculateTotalMetrics } from '@/utils/csvParser';

const EcommerceData = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [filteredData, setFilteredData] = useState<ProductData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<keyof ProductData>('salesRevenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCSVData();
  }, []);

  useEffect(() => {
    let filtered = data.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.parentAsin.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      const comparison = typeof aVal === 'string' ? aVal.localeCompare(bVal as string) : (aVal as number) - (bVal as number);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredData(filtered);
  }, [data, searchTerm, sortBy, sortOrder]);

  const loadCSVData = async () => {
    try {
      const response = await fetch('/src/data/business-report.csv');
      if (!response.ok) {
        throw new Error('Failed to load CSV data');
      }
      const csvText = await response.text();
      const parsedData = parseCSVData(csvText);
      setData(parsedData);
      setLoading(false);
    } catch (error) {
      console.error('Error loading CSV data:', error);
      setLoading(false);
    }
  };

  const totalMetrics = calculateTotalMetrics(filteredData);
  const averageConversionRate = filteredData.length > 0 
    ? filteredData.reduce((sum, p) => sum + p.conversionRate, 0) / filteredData.length 
    : 0;

  const topProducts = filteredData.slice(0, 10).map(product => ({
    name: product.title.slice(0, 30) + '...',
    revenue: product.salesRevenue,
    orders: product.orderedQuantity
  }));

  const categoryData = [
    { name: 'Kitchen Tools', value: filteredData.filter(p => p.title.toLowerCase().includes('kitchen')).length },
    { name: 'Bento Boxes', value: filteredData.filter(p => p.title.toLowerCase().includes('bento')).length },
    { name: 'Knives', value: filteredData.filter(p => p.title.toLowerCase().includes('knife')).length },
    { name: 'Others', value: filteredData.filter(p => !p.title.toLowerCase().includes('kitchen') && !p.title.toLowerCase().includes('bento') && !p.title.toLowerCase().includes('knife')).length }
  ];

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading e-commerce data...</p>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO 
        title="E-commerce Analytics Dashboard - carbonfactor.io"
        description="Comprehensive e-commerce performance analytics dashboard showing product metrics, sales data, and business insights."
        keywords={['ecommerce analytics', 'sales dashboard', 'product performance', 'business intelligence']}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">E-commerce Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive view of your product performance and sales metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                ${totalMetrics.totalRevenue.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                From {totalMetrics.totalProducts} products
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {totalMetrics.totalOrders.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Ordered quantity
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sessions</CardTitle>
              <Eye className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {totalMetrics.totalSessions.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                User sessions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Conversion</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {averageConversionRate.toFixed(2)}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Conversion rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Products by Revenue</CardTitle>
              <CardDescription>Best performing products by sales revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topProducts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
              <CardDescription>Distribution of products by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Product Data</CardTitle>
            <CardDescription>Detailed view of all product performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search products, SKUs, or ASINs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as keyof ProductData)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salesRevenue">Revenue</SelectItem>
                  <SelectItem value="orderedQuantity">Orders</SelectItem>
                  <SelectItem value="sessions">Sessions</SelectItem>
                  <SelectItem value="conversionRate">Conversion Rate</SelectItem>
                  <SelectItem value="title">Product Name</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </Button>
            </div>

            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead className="text-right">Sessions</TableHead>
                    <TableHead className="text-right">Conv. Rate</TableHead>
                    <TableHead className="text-right">Orders</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead>Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.slice(0, 20).map((product, index) => (
                    <TableRow key={`${product.parentAsin}-${index}`}>
                      <TableCell className="max-w-[300px]">
                        <div>
                          <p className="font-medium truncate">{product.title}</p>
                          <p className="text-xs text-muted-foreground">{product.parentAsin}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                      <TableCell className="text-right">{product.sessions.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{product.conversionRate.toFixed(2)}%</TableCell>
                      <TableCell className="text-right">{product.orderedQuantity}</TableCell>
                      <TableCell className="text-right font-medium">
                        ${product.salesRevenue.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant={product.conversionRate > 5 ? "default" : "secondary"}>
                          {product.conversionRate > 5 ? "High" : "Standard"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredData.length > 20 && (
              <div className="mt-4 text-center text-muted-foreground">
                Showing 20 of {filteredData.length} products
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default EcommerceData;