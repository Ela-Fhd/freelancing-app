import useOwnerProjects from "./useOwnerProjects";
import Loading from "@/ui/loading";
import Empty from "@/ui/empty";
import Table from "@/ui/table";
import ProjectsRow from "./ProjectsRow";
import Modal from "@/ui/modal";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();
  const [openModal, setOpenModal] = useState(false);

  // if is loading ==> show isLoading component
  //  if projects array is empty and projects.length === 0 => show empty message to user / else show projects table

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex justify-end items-center mb-3">
        <button
          className="btn btn--primary text-sm"
          onClick={() => setOpenModal(true)}
        >
          ایجاد پروژه
        </button>
        <Modal
          open={openModal}
          title="ایجاد پروژه جدید"
          close={() => setOpenModal(false)}
        >
          <CreateProjectForm onClose={() => setOpenModal(false)} />
        </Modal>
      </div>

      {!projects.length ? (
        <Empty resourceName="پروژه" />
      ) : (
        <Table>
          <Table.Header>
            <Table.Row>
              <th>#</th>
              <th>عنوان پروژه</th>
              <th>دسته بندی</th>
              <th>پروژه</th>
              <th>ددلاین</th>
              <th>تگ ها</th>
              <th>فریلنسر</th>
              <th>وضیعت</th>
              <th>عملیات</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects.map((project, index) => (
              <ProjectsRow project={project} index={index} key={project._id} />
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}

export default ProjectsTable;
