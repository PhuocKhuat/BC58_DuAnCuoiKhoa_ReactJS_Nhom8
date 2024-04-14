import { Modal } from "antd";
import React from "react";
import cybersoftCodeZuni from "../../../Assets/cybersoftCodeZuni.mp4";
import ReactPlayer from "react-player";

export default function VideoJS({ isModalOpen, handleCancel }) {
  return (
    <div>
      <Modal
        title="Preview video"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1050}
        style={{ height: "500px" }}
      >
        <ReactPlayer url={cybersoftCodeZuni} width="1000px" height="500px" controls={true} />
      </Modal>
      {/* <video width="900" height="500">
          <source src={cybersoftCodeZuni} type="video/mp4" />
      </video> */}
    </div>
  );
}
