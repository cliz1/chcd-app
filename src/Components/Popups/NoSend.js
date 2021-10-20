import { BsX } from 'react-icons/bs'
import { Row, Col, Button } from 'react-bootstrap';

import translate from "../../Assets/indexes/translate.json"
import nationality from "../../Assets/indexes/nationality.json"
import family_trans from "../../Assets/indexes/religious_family.json"
import cat_trans from "../../Assets/indexes/categories.json"

function NoSend(props) {

  return (
    <div className={props.nosend} >
      <div className="results_message">
      <BsX className="results_close m-2" data-prop="nosend" onClick={(i) =>  props.toggleDisplay(i)}/>
        <Row className="mt-3">
          <Col className="m-2 y-auto">
            <h3>{translate[0]["sorry"][props.language]}</h3>
            {translate[0]["no_send"][props.language]}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NoSend
