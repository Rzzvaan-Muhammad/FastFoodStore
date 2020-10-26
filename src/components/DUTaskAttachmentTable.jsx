// code generated @DevUp using PlatformBuilder, 01/01/2020 13:57:39
import React, { Component } from "react";
// import moment from "moment";
import Table from "../common/table";

class DUTaskCategoriesTable extends Component {
  columns = [
    // {
    //   property: "Id",
    //   label: "Id"
    // },
    // {
    //   property: "RecordId",
    //   label: "Record Id"
    // },
    {
      property: "FilePath",
      label: "File Path"
      // ,
      // content: DUTask => (
      //   <>
      //     <Link
      //       to="http://localhost:53621/TaskManagerWAPI/C:/Temp/BodyPart_3c9098b9-4bb3-4dc5-80ec-4a63f409c2f6"
      //       target="_blank"
      //       download
      //     >
      //       Download
      //     </Link>
      //   </>
      // )
    },
    {
      property: "FileType",
      label: "File Type"
    }

    // {
    //   property: "AppName",
    //   label: "App Name"
    // },
    // {
    //   property: "ModuleName",
    //   label: "Module Name"
    // },
    // {
    //   property: "Description",
    //   label: "Description"
    // },
    // {
    //   property: "ImageTag",
    //   label: "Image Tag"
    // }
  ];

  render() {
    const {
      DUTaskAttachments,
      onSort,
      sortColumn,
      onSelect,
      selected,
      onView
    } = this.props;

    return (
      <Table
        selected={selected}
        columns={this.columns}
        data={DUTaskAttachments}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default DUTaskCategoriesTable;
