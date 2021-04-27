import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function signOut() {
  let auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    localStorage.clear();
    window.location.href = "/";

  });
}
function DropdownMenu(props) {
    if (props.visibility) {

        const handleSelect = (e) => {
            if (e === "signOut")
                signOut()
        }

        return (
                <DropdownButton
                    alignRight
                    // title="Profile"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >

                    <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
                    <Dropdown.Item eventKey="settings">Settings</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item eventKey="signOut">Sign Out</Dropdown.Item>
                </DropdownButton>

                // {/*<span className="material-icons" >*/}
                // {/*    account_circle*/}
                // {/*    </span>*/}
                //
                // {/*<h4>{value}</h4>*/}

        );
    }
    else
        return null
}
//TODO: Aditya look over material-icons
export default DropdownMenu;
