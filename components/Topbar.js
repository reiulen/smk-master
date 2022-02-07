import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function Topbar() {
  return (
    <div className="top-bar d-md-block d-none">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <img src="/assets/gambar/logo-motto.png" height={"80"} />
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="form-group pt-4">
              <form>
                <InputGroup className="mb-3">
                  <FormControl placeholder="Cari...." name="cari" aria-label="Cari...." aria-describedby="basic-addon2" />
                  <Button className="border-left-0" type="submit">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </Button>
                </InputGroup>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
