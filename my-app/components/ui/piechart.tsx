"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "Marketing", value: 15.2 },
  { name: "Sales", value: 18.2 },
  { name: "Finance", value: 12.1 },
  { name: "Human Resources", value: 9.1 },
  { name: "IT", value: 24.2 },
  { name: "Operations", value: 21.2 }
]

export function DepartmentPieChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Employee Count by Department</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer 
          className="h-[300px]"
          config={{
            marketing: {
              label: "Marketing",
              color: "hsl(var(--chart-1))",
            },
            sales: {
              label: "Sales",
              color: "hsl(var(--chart-2))",
            },
            finance: {
              label: "Finance",
              color: "hsl(var(--chart-3))",
            },
            hr: {
              label: "Human Resources",
              color: "hsl(var(--chart-4))",
            },
            it: {
              label: "IT",
              color: "hsl(var(--chart-5))",
            },
            operations: {
              label: "Operations",
              color: "hsl(var(--chart-6))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`var(--color-${Object.keys(data)[index]}`} 
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

