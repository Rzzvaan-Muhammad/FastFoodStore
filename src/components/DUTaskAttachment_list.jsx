// code generated @DevUp using PlatformBuilder, 01/01/2020 13:57:39
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonPanel from "../buttonPanel";
import Pagination from "../../common/pagination";
import paginate from "../../utils/paginate";
import SearchForm from "../forms/searchForm";
import { deleteDUAttachment, getDUAttachments } from "../../services/DUTaskAttachmentServices";
import DUTaskAttachmentTable from "../tables/DUTaskAttachmentTable";
import TranslateText from "../../common/translateText";

class DUTaskAttachmentsListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DUTaskAttachments: [],
      pageSize: 10,
      currentPage: 1,

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    // const { data } = getDUAttachments(this.state.data);
    const filter = {
      RecordId: this.props.mealBoxId,
      AppName: "FastFoodStore",
      ModuleName: this.props.ModuleName
    };
    const { data: response } = await getDUAttachments(filter);
    this.setState({ DUTaskAttachments: response.Result });
  }

  handleDelete = async id => {
    const originalDUTaskAttachments = this.state.DUTaskAttachments;
    const DUTaskAttachments = this.state.DUTaskAttachments.filter(c => c.Id !== id);
    this.setState({ DUTaskAttachments });
    console.log("TCL: DUTaskAttachmentsListView -> id", id);
    const { data: response } = await deleteDUAttachment(id);
    if (response.status >= 400 && response.status < 500)
      this.setState({ DUTaskAttachments: originalDUTaskAttachments });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changess/dUTaskCategory/${id}`);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSelect = id => {
    this.setState({ selected: id });
  };

  handleEdit = id => {
    this.props.history.push(`TaskAttachments/${id}`);
  };

  handleAdd = () => {
    this.props.history.push(`DUTaskAttachments/new`);
  };

  handleView = id => {
    this.props.history.push(`TaskAttachments/view${id}&`);
  };

  handleSearch = value => {
    // const str = value.toLowerCase().split(" ");
    // const keys = str.map(e => e.split(":"));
    // console.log(`${keys[0][0]}:${keys[0][1]}`);
    // console.log(`${keys[1][0]}:${keys[1][1]}`);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, DUTaskAttachments: allDUTaskAttachments } = this.state;

    const filtered = allDUTaskAttachments;

    // if (name) filtered = this.filteredResult();
    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const DUTaskAttachments = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: DUTaskAttachments };
  };

  async filteredResult() {
    const { allDUTaskAttachments } = this.state;
    let DUTaskAttachments = { ...allDUTaskAttachments };
    const { data: response } = await this.getOrders(); // TOPFB
    DUTaskAttachments = response.value;
    this.setState({ DUTaskAttachments });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: DUTaskAttachments } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                  <FontAwesomeIcon className="mr-2" icon={faListAlt} />
                  <TranslateText defaultText="Task Attachments" resourceId="lbl_Task_Attachments" />
                </span>
              </Col>
              <Col xs="*" md="8">
                <SearchForm onSearch={this.handleSearch} />
              </Col>
              <Col>
                <ButtonPanel
                  id={selected}
                  show="false"
                  onEdit={this.handleEdit}
                  onView={this.handleView}
                  onAdd={this.handleAdd}
                  onDelete={this.handleDelete}
                  onTrackChanges={this.handleTrackChanges}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div>
              <DUTaskAttachmentTable
                DUTaskAttachments={DUTaskAttachments}
                selected={selected}
                sortColumn={sortColumn}
                onSort={this.handleSort}
                onView={this.handleView}
                onDelete={this.handleDelete}
                onExport={this.handleExport}
                onSelect={this.handleSelect}
              />
            </div>
          </CardBody>
          <Pagination
            itemsCount={totalCount || 0}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </Card>
      </>
    );
  }
}
export default DUTaskAttachmentsListView;
