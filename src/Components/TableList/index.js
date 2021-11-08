/* eslint-disable max-len */
/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import {
  Row, Col, Button, Input, Label, Table,
} from 'reactstrap';

import get from 'lodash/get';
import map from 'lodash/map';
import noop from 'lodash/noop';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';

export const getDocumentByColumn = (document, column) => get(document, get(column, 'key', null));

const TableList = ({
  onDelete,
  onEdit,
  onView,
  onSort,
  onSelectAll,
  onSelect,
  headers,
  columns,
  documents,
}) => (
    <>
        {!isEmpty(documents) && (
            <Row>
                <Col>
                    <Table hover className="table-list">
                        <thead>
                            <tr>
                                {map(headers, (header) => (
                                    <th
                                      key={uniqueId('tableListHeader')}
                                      className={header.className}
                                      style={header.style}
                                      onClick={() => onSort(header)}
                                    >
                                        {header.label}
                                        {header.checkAll && (
                                            <Label>
                                                <Input
                                                  role="checkAll"
                                                  className="d-none"
                                                  type="checkbox"
                                                  checked={header.checked}
                                                  onClick={() => onSelectAll()}
                                                  onTouchEnd={() => onSelectAll()}
                                                />
                                            </Label>
                                        )}
                                        &nbsp;
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {map(documents, (document) => (
                                <tr
                                  key={uniqueId('tableListBodyTr')}
                                  labelById={get(document, 'id')}
                                >
                                    {map(columns, (column) => (
                                        <td
                                          className={
                                                classNames(
                                                  'border-left-0 border-right-0 border-top-0',
                                                  'border-bottom align-middle',
                                                  column.className,
                                                )
                                            }
                                          key={uniqueId('tableListBodyTd')}
                                            // eslint-disable-next-line react/jsx-props-no-spreading
                                          {...(column.title ? { title: get(document, column.title) } : {})}
                                        >
                                            {column.check && (
                                                <Label>
                                                    <Input
                                                      className="d-none"
                                                      type="checkbox"
                                                      checked={getDocumentByColumn(document, column)}
                                                      onClick={({ target: { checked } }) => onSelect(document, checked)}
                                                    />
                                                    {!getDocumentByColumn(document, column) && (
                                                      'icono'
                                                    )}
                                                    {getDocumentByColumn(document, column) && (
                                                      'icono'
                                                    )}
                                                </Label>
                                            )}
                                            {column.actions && (
                                                <Col className="d-flex justify-content-evenly">
                                                    {column.edit && (
                                                        <Button
                                                          onClick={() => onEdit(document)}
                                                          onTouchEnd={() => onEdit(document)}
                                                          color="warning"
                                                          className="btn-grey "
                                                        >
                                                                 Edit
                                                        </Button>
                                                    )}
                                                    {column.view && (
                                                        <Button
                                                          onClick={() => onView(document)}
                                                          onTouchEnd={() => onView(document)}
                                                          color="success"
                                                          className="btn-grey "
                                                        >
                                                            More Info
                                                        </Button>
                                                    )}
                                                    {column.delete && (
                                                        <Button
                                                          onClick={() => onDelete(document)}
                                                          onTouchEnd={() => onDelete(document)}
                                                          color="danger"
                                                          className="btn-grey "
                                                        >
                                                            Delete
                                                        </Button>
                                                    )}
                                                </Col>
                                            )}
                                            {column.drawInformation && column.drawInformation(document)}
                                            {!column.drawInformation && get(document, column.key)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )}
    </>
);

TableList.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onButtonAction: PropTypes.func,
  onButtonActionLabel: PropTypes.string,
  onSelectAll: PropTypes.func,
  onSettings: PropTypes.func,
  onDownload: PropTypes.func,
  onView: PropTypes.func,
  columns: PropTypes.arrayOf(PropTypes.shape({})),
  documents: PropTypes.arrayOf(PropTypes.shape({})),
  onSort: PropTypes.func,
  pagination: PropTypes.shape({
    total: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    maxPaginationNumbers: PropTypes.number,
    selectedPage: PropTypes.number,
    setPageSize: PropTypes.func,
    records: PropTypes.arrayOf(PropTypes.number),
  }),
  onSelect: PropTypes.shape({}).isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  i18n: PropTypes.shape({}).isRequired,
  handleChangePage: PropTypes.func.isRequired,
  withOutPagination: PropTypes.bool,
};

TableList.defaultProps = {
  columns: [],
  documents: [],
  pagination: null,
  onSort: noop,
  withOutPagination: false,
  onDelete: noop(),
  onEdit: noop(),
  onAdd: noop(),
  onButtonAction: noop(),
  onSelectAll: noop(),
  onSettings: noop(),
  onDownload: noop(),
  onView: noop(),
  onButtonActionLabel: '',
};

export default TableList;
