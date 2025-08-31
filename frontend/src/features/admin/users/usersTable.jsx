import Loading from "@/ui/loading";
import Empty from "@/ui/empty";
import Table from "@/ui/Table";
import useUsers from "@/hooks/useUsers";
import UserRow from "./userRow";

const UsersTable = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;
  if (!users?.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>نام و نام خانوادگی</th>
          <th>شماره تلفن</th>
          <th>ایمیل</th>
          <th>نقش</th>
          <th>وضیعت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow user={user} index={index} key={user._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
