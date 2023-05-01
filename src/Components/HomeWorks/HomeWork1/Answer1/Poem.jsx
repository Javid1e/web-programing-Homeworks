import React from "react";
import Styles from "./Poem.module.css";
import CustomP from "../../../../UI/Elements/CustomP";
import Card from "../../../../UI/Elements/Card";
function Poem(props) {
  const { title, poem, mean } = props;
  const lines = poem ? poem.split("\n") : [];
  return (
    <div>
        <Card isDefault={true}>
            <h1 className={Styles["a1h1"]}>
                {"غزل شماره "}
                {title}
            </h1>
        </Card>

        <Card isDefault={false}>
            {lines.map((line, index) => (
                <CustomP className={Styles["a1p"]} key={index}>
                    {line}
                </CustomP>
            ))}
        </Card>
      <Card isDefault={true}>
          <CustomP isMessage={true} className={Styles["a1h1"]}>
              {mean}
          </CustomP>
      </Card>

    </div>
  );
}

export default Poem;
