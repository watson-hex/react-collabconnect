
import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import TagsInput from "react-tagsinput";
import Autocomplete from "../../Ask/Autocomplete";
import PropTypes from "prop-types";
// import SvgIcon from "../../../common/SvgIcon";
// import './modaldelete.css'



function Oadd({skills , onCreate}) {

    function handleSubmit(e,skills){
        onCreate(skills)
        setState({show: false})
        alert("skill added successfully")
    }

    const initialState = {
        show: false,
        tags:[...skills],
    }
    function handleChangeTag(tags) {
        setState({tags: tags})
    }

    function handleChange(value){
        setState({"searchTerm": value, "found_match":false});
    }

    function renderAutocomplete({addTag, ...props}) {
        console.log(props)
        return (
            <div>
                <Autocomplete
                    onChange={(val) => handleChange(val)}
                    onMatch={(val) => {
                    if (!state.tags.includes(val))
                        addTag(val)
                }}
                    searchTerm={state.searchTerm}
                    suggestions={state.temp_l}
                    version={2}
                />
            </div>

        )
    }
      const [state, setInitialState] = useState(initialState);

    function setState(obj) {
        setInitialState({
            ...state,
            ...obj
        })
    }


    const handleShow = () => setState({show: true});

    const handleClose = () => setState({show: false});


      return (
          <>
              <div
                  className="btn"
                  onClick={handleShow}
              >
                  <span
                      className="material-icons float-right"
                      onClick=""
                  >
                      add
                  </span>
              </div>


              <Modal
                  onHide={handleClose}
                  show={state.show}
              >
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Modal heading
                      </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                      Go on, add more Skills
                      <TagsInput
                          onChange={handleChangeTag}
                          renderInput={renderAutocomplete}
                          value={state.tags}
                      />
                      
                  </Modal.Body>

                  <Modal.Footer>
                      <button
                          className="btn btn-warning"
                          onClick={(e) => handleSubmit(e,skills)}
                          type="button"
                      >
                          Confirm
                      </button>
                  </Modal.Footer>
              </Modal>
          </>
      );
}

Oadd.propTypes = {
    onCreate:PropTypes.func.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Oadd