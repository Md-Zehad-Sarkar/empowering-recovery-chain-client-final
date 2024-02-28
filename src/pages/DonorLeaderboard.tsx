import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LeaderboardTable from "../components/home/LeaderboardTable";
import { useGetAllDonationQuery } from "@/redux/features/donation/donation.api";

type TDonor = {
  _id?: string;
  userName?: string;
  category: string;
  email: string;
  totalAmount: number | undefined;
  amount?: number;
  description?: string;
};

const DonorLeaderboard = () => {
  const { data: allDonors } = useGetAllDonationQuery("");

  const donorInfo: Record<string, TDonor> = {};
  allDonors?.data?.forEach((donor: TDonor) => {
    const { email, amount, _id, userName, category } = donor;
    if (!donorInfo[email]) {
      donorInfo[email] = { _id, userName, category, email, totalAmount: 0 };
    }
    donorInfo[email].totalAmount += Number(amount);
  });

  const donors = Object.values(donorInfo);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl font-medium ">Category</TableHead>
          <TableHead className="text-xl font-medium ">Name</TableHead>
          <TableHead className="text-xl font-medium">Email</TableHead>
          <TableHead className="text-xl font-medium">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donors?.map((donor) => (
          <LeaderboardTable donor={donor} key={donor._id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default DonorLeaderboard;
