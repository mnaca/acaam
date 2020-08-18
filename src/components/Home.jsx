import React, { useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../firebase";

export default function Home(props) {
  const { homeId } = useParams();

  useEffect(() => {
    db.collection("offers")
    .doc(props.type)
    .collection("homes")
    .doc(homeId)
    .get()
    .then((doc) => console.log(doc.data()));
  }, [homeId])

  return <h2>HOME</h2>;
}
