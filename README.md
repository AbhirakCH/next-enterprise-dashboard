# Next.js Enterprise Admin Dashboard

A high-performance, modern Admin Dashboard built with the latest React ecosystem technologies. Designed for scalability, performance, and user experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
- **Responsive Layout**: Collapsible Sidebar and Header with mobile support using Shadcn/UI.
- **Theme Support**: Built-in Dark/Light mode toggle using `next-themes`.
- **Interactive Dashboard**:
  - Summary Cards for key metrics.
  - Interactive Line and Bar charts using `recharts`.
- **High-Performance Data Table**:
  - Handles **10,000+ records** efficiently.
  - **Client-side Pagination & Sorting** using `@tanstack/react-table`.
  - **Advanced Filtering** (Global search, Column filters).
- **Mock Data**: Robust data generation using `Faker.js` for realistic testing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State/Data**: [TanStack Table](https://tanstack.com/table/v8)
- **Visualization**: [Recharts](https://recharts.org/)
- **Utilities**: [Faker.js](https://fakerjs.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed.
- npm or yarn.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd next-enterprise-dashboard
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with Sidebar/Header
│   ├── page.tsx          # Dashboard Home (Charts/Cards)
│   └── users/            # Users Page (Data Table)
├── components/           # React Components
│   ├── ui/               # Shadcn/UI primitives
│   ├── DataTable.tsx     # Reusable Table component
│   ├── Sidebar.tsx       # Navigation Sidebar
│   ├── Header.tsx        # Top Header
│   └── ...
├── lib/                  # Utilities
│   ├── mock-data.ts      # Data generators
│   └── utils.ts          # Helper functions
└── types/                # TypeScript interfaces
```

## 🧪 Verification

To verify the mock data generation:

```bash
npx tsx scripts/verify-data.ts
```

## 📜 License

This project is open-source and available under the MIT License.
