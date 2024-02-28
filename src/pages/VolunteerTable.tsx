import { TableCell, TableRow } from "@/components/ui/table";

const VolunteerTable = ({ volunteer }) => {
  return (
    <TableRow key={volunteer._id}>
      <TableCell className="font-medium">
        <img src={volunteer?.image} className="w-24 h-24 rounded-md" alt="" />
      </TableCell>
      <TableCell>{volunteer?.name}</TableCell>
      <TableCell>{volunteer?.email}</TableCell>
      <TableCell>{volunteer?.contactNo}</TableCell>
      <TableCell>{volunteer?.address}</TableCell>
      <TableCell>{volunteer?.time}</TableCell>
    </TableRow>
  );
};

export default VolunteerTable;
