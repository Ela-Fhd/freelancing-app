import Table from "../../ui/table";
import truncateText from "../../utils/truncateText";
import toLocaleDateString from "../../utils/toLocaleDateString";
import { toPersianNumberWithComma } from "../../utils/toPersianDigits";
import { FaRegTrashCan } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import Modal from "../../ui/modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/confirmDelete";

export default function ProjectsRow({ project, index }) {
  const [openEditModal, setOpenEditModal] = useState(true);
  const [openDeletModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <Table.Row key={project._id}>
        <td>{index + 1}</td>
        {/* <td>{truncateText(project.title, 10)}</td> */}
        <td>{(project.title, 10)}</td>
        {/* <td>{project.category.title}</td>
        <td>{toPersianNumberWithComma(project.budget)}</td>
        <td>{toLocaleDateString(project.deadline)}</td> */}
        {/* <td>
          <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
            {project.tags.map((tag) => (
              <span className="agde badge--secondary" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </td> */}
        {/* <td>{project.freelancer?.name || "-"}</td> */}
        {/* <td>
          {project.status === "OPEN" ? (
            <span className="badge badge--success">باز</span>
          ) : (
            <span className="badge badge--danger">بسته</span>
          )}
        </td> */}
        <td>
          <div className="flex items-center gap-x-5">
            <>
              <button onClick={() => setOpenDeleteModal(true)}>
                <FaRegTrashCan className="w-5 h-5 text-error" />
              </button>
              <Modal
                title={`حذف ${project.title}`}
                open={openDeletModal}
                close={() => setOpenDeleteModal(false)}
              >
                <ConfirmDelete
                  resourceName={project.title}
                  onClose={() => setOpenDeleteModal(false)}
                />
              </Modal>
            </>
            <>
              <button onClick={() => setOpenEditModal(true)}>
                <GrEdit className="w-5 h-5 text-blue-500" />
              </button>
              <Modal
                title={`ویرایش ${project.title}`}
                open={openEditModal}
                close={() => setOpenEditModal(false)}
              >
                test modal
              </Modal>
            </>
          </div>
        </td>
      </Table.Row>
    </>
  );
}
