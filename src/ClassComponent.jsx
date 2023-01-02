import { Component } from "react";
import FunctionComponent from "./FunctionComponent";

export default class ClassComponent extends Component {
    render() {
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente dicta repellat nostrum nemo eveniet veniam natus
                    possimus alias enim laboriosam exercitationem nulla, in et
                    rerum illum ipsam corrupti iusto illo.
                </p>

                <FunctionComponent />
            </div>
        );
    }
}
