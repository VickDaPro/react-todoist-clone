import firebase from "firebase";
import { FaHandHoldingWater } from "react-icons/fa";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-test="checkbox-holder"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};
