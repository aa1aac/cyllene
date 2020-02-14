import React, { Component, useState } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import { convertToRaw } from "draft-js";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import "./editorStyles.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import M from "materialize-css/dist/js/materialize.min.js";
import QAContext from "../../context/QA/QAContext";

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];
const text = " ";

class CustomEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text)
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  onSubmit = () => {
    let contentState = this.state.editorState.getCurrentContent();
    let converted = convertToRaw(contentState);

    if (converted.blocks.length) {
      // post question if addQuestion:true
      if (this.props.addQuestion) {
        // check whether question is present
        if (this.props.question.trim()) {
          // move to send the request

          this.context.postQuestion(this.props.question, converted);
        } else {
          M.toast({
            html: "none of the fields can be empty",
            classes: "red rounded"
          });
        }
      }

      // post answer if addAnswer:true
      if (this.props.addAnswer) {
        // move to send the request
      }
    } else {
      M.toast({ html: "field cannot be empty", classes: "red rounded" });
    }
  };

  render() {
    return (
      <div>
        <div className="editor" onClick={this.focus}>
          <SideToolbar />
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={element => {
              this.editor = element;
            }}
          />
        </div>
        <button className="btn btn-large blue" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

CustomEditor.contextType = QAContext;

export default CustomEditor;
