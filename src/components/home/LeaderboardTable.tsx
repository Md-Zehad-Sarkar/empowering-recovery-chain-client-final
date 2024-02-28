import { TableCell, TableRow } from "@/components/ui/table";

const LeaderboardTable = ({ donor }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{donor?.category}</TableCell>
      <TableCell className="font-medium">{donor?.userName}</TableCell>
      <TableCell>{donor?.email}</TableCell>
      <TableCell>$ {donor?.totalAmount}</TableCell>
    </TableRow>
  );
};

export default LeaderboardTable;
