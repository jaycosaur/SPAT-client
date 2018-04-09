import React, { Component } from 'react'
import { Card, Col, Row, Button } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class componentName extends Component {
  render() {
        return (
            <React.Fragment>
                <Row gutter={16}>
                    <Col md={8} xs={24}>
                        <Card title="Dataset Summary">
                            Sample Dataset Information
                        </Card>
                    </Col>
                    <Col md={16} xs={24}>
                       <NotebookEditor />
                    </Col>
                </Row>
            </React.Fragment>
        )
  }
}

class NotebookEditor extends Component {
    state = {
        isUnsaved: false,
        editorState: EditorState.createEmpty(),
    }

    saveNotebook = () => 
        {this.setState({isUnsaved: false})}

    onEditorStateChange = (editorState) => {
        console.log(editorState)
        this.setState({
            editorState,
            isUnsaved: true
        });
    };        

    render() {
        return (
            <Card title="Dataset Notebook" bodyStyle={{margin: 0, padding: 0}}extra={this.state.isUnsaved?<Button size="small" onClick={this.saveNotebook} type="primary" shape="circle" icon="save" />:null}>
                <Editor
                    editorState={this.state.editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    />
            </Card>
        )
    }
}

