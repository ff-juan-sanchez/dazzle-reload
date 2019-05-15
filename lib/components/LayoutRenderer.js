import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
const LayoutRenderer = (props) => {
  const {
    layout,
    data,
    widgets,
    onRemove,
    editable,
    onAdd,
    frameComponent,
    rowClass,
    onMove,
    onEdit,
    editableColumnClass,
    droppableColumnClass,
    addWidgetComponentText,
    addWidgetComponent,
  } = props;

  const rows = layout.rows.map((row, rowIndex) => { // eslint-disable-line arrow-body-style
    return (
      <Row
        key={rowIndex}
        rowClass={rowClass}
        columns={row.columns}
        widgets={widgets}
        onRemove={onRemove}
        layout={layout}
        data={data}
        rowIndex={rowIndex}
        editable={editable}
        onAdd={onAdd}
        onMove={onMove}
        onEdit={onEdit}
        frameComponent={frameComponent}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
        addWidgetComponentText={addWidgetComponentText}
        addWidgetComponent={addWidgetComponent}
      />
    );
  });

  return (
    <div>
      {rows}
    </div>
  );
};

LayoutRenderer.propTypes = {
  /**
   * Layout of the dashboard.
   */
  layout: PropTypes.object,

  /**
   * The state for all the widgets
   */
  data: PropTypes.object,

  /**
   * Widgets that the dashboard supports.
   */
  widgets: PropTypes.object,

  /**
   * Indicates weather this dashboard is in editable mode.
   */
  editable: PropTypes.bool,

  /**
   * Function that will be called when user removed a widget.
   */
  onRemove: PropTypes.func,

  /**
   * Function that will be called user tries to add a widget.
   */
  onAdd: PropTypes.func,

  /**
   * Frame that should be used as the outer cotnainer of the widget.
   */
  frameComponent: PropTypes.func,

  /**
   * Class name that should be provided to the row component.
   */
  rowClass: PropTypes.string,

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove: PropTypes.func,

  onEdit: PropTypes.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: PropTypes.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: PropTypes.string,

  /**
   * Customized AddWidget component.
   */
  addWidgetComponent: PropTypes.func,

  /**
   * Text that should be displayed in the `AddWidget` component.
   */
  addWidgetComponentText: PropTypes.string,
};

LayoutRenderer.defaultProps = {
  /**
   * Default layout.
   */
  layout: {
    rows: [],
  },
};

export default LayoutRenderer;
