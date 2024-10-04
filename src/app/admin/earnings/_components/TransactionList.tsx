import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCw } from "lucide-react";

interface Transaction {
    id: number;
    name: string;
    amount: number;
    timestamp: Date;
}

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
        <Card className="col-span-4 row-span-2 row-start-2 col-start-9">
            <CardHeader className="flex-row justify-between items-baseline">
                <CardTitle className="text-sm">Tranzakciók</CardTitle>
                <RotateCw size={11} />
            </CardHeader>
            <CardContent>
                {transactions.length === 0 ? (
                    <div className="text-center py-4">Nincsenek tranzakciók.</div>
                ) : (
                    transactions.map((transaction) => (
                        <div key={transaction.id} className="flex justify-between border-b py-2">
                            <div className="flex">
                                <div className="flex flex-col ml-2">
                                    <h4 className="font-semibold">{transaction.name}</h4>
                                    <p className="text-xs">{new Date(transaction.timestamp).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="font-semibold">{transaction.amount} Ft</div>
                        </div>
                    ))
                )}
            </CardContent>
        </Card>
    );
};

export default TransactionList;
