import React from 'react';
import Dashboard, { addWidget } from '../../lib';

// App Components
import Header from './Header';
import EditBar from './EditBar';
import Container from './Container';

// Widgets
import HelloWorld from './widgets/HelloWorld';
import AnotherWidget from './widgets/AnotherWidget';
import AddWidgetDialog from './AddWidgetDialog';
// import CustomAddWidgetButton from './CustomAddWidgetButton';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom.css';
import '../../lib/style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'RocketWidget', id: 'AnotherWidget-0-0-0' }, { key: 'AlienWidget', id: 'AnotherWidget-0-0-1' }, { key: 'RocketWidget', id: 'AnotherWidget-0-0-2' }],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'RocketWidget', id: 'AnotherWidget-0-1-0' }],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'RocketWidget', id: 'AnotherWidget-0-2-0' }],
          }],
        }, {
          columns: [{
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'RocketWidget', id: 'AnotherWidget-1-0-0' }],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'RocketWidget', id: 'AnotherWidget-1-1-0' }],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{ key: 'RocketWidget', id: 'AnotherWidget-1-2-0' }],
          }],
        }],
      },
      widgets: {
        RocketWidget: {
          type: HelloWorld,
          title: 'Rocket Widget',
        },
        AlienWidget: {
          type: AnotherWidget,
          title: 'Alien Widget',
        },
      },
      editMode: false,
      isModalOpen: false,
      addWidgetOptions: null,
    };
  }

  onRemove = (layout) => {
    this.setState({
      layout,
    });
  }

  onAdd = (layout, rowIndex, columnIndex) => {
    this.setState({
      isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }

  onMove = (layout) => {
    this.setState({
      layout,
    });
  }

  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    /* eslint max-len: "off" */
    const data = {
      'AnotherWidget-0-0-1': {
        data: [{
          value: 1000,
        }],
        title: 'Some big title to show',
      },
      'AnotherWidget-0-0-0': {
        myValue: 1000,
        title: 'Another title',
      },
    };
    return (
      <Container>
        <Header />
        <EditBar onEdit={this.toggleEdit} />
        <Dashboard
          onRemove={this.onRemove}
          layout={this.state.layout}
          data={data}
          widgets={this.state.widgets}
          editable={this.state.editMode}
          addWidgetComponentText="Add"
          onAdd={this.onAdd}
          onMove={this.onMove}
        />
        <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.widgetSelected} />
      </Container>
    );
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  widgetSelected = (widgetName) => {
    const { layout, rowIndex, columnIndex } = this.state.addWidgetOptions;
    const [newLayout, newWidget] = addWidget(layout, rowIndex, columnIndex, widgetName);
    newWidget.id;
    this.setState({
      layout: newLayout,
    });
    this.onRequestClose();
  }
}

export default App;
