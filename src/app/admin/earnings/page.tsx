"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import GridLayout from "@/components/ui/gridLayout";
import { User } from "@prisma/client";
import useSWR from "swr";
import useCheckAccess from "@/lib/hooks/useCheckAccess"; // Import your access check hook
import { Role } from "@prisma/client"; // Import Role
import MatrixEffect from "./_components/Matrix";
import { AreaChartComponent } from "./_components/ChartCard";
import { FileChartColumnIncreasing } from "lucide-react";
import TransactionList from "./_components/TransactionList"; // Import the TransactionList component
import BankCard from "./_components/BankCard";

// Fetcher function to get data from the API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Dashboard() {
    // Check specifically for ADMIN role
    const { hasAccess: isAdmin } = useCheckAccess([Role.ADMIN]);

    const { data: usersData, error: usersError } = useSWR<User[]>("/api/users", fetcher, { revalidateOnFocus: false });
    const { data: transactionsData, error: transactionsError } = useSWR("/api/transactions", fetcher, { revalidateOnFocus: false });

    if (usersError || transactionsError) return <div>Error loading data.</div>;
    if (!usersData || !transactionsData) return <Loading isLoading={!usersData || !transactionsData} />;

    const incomeAmount = 239213123; // Replace this with your dynamic income value

    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Bevétel</h1>
            </div>
            <GridLayout className="grid-cols-12 grid-rows-auto">
                <div className="col-span-8">
                    <h4>Teljes egyenleg</h4>
                    <MatrixEffect input={incomeAmount} /> {/* Use the MatrixEffect component here */}
                    <p className="text-xs">+123.34% az előző hónaphoz képest.</p>
                    <Button variant="outline" className="mt-5 self-end place-self-end justify-self-end">
                        CSV generálás <FileChartColumnIncreasing size={13} />
                    </Button>
                </div>
                <BankCard />
                <TransactionList transactions={transactionsData} />
                <AreaChartComponent />
            </GridLayout>
        </>
    );
}
