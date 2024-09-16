import { ArrowLeft } from "@gravity-ui/icons";
import { Button, Icon } from "@gravity-ui/uikit";

import "./ButtonBack.css"

export default function ButtonBack() {
    return (
        <Button view="outlined" size="m" className="btn-back">
          <Icon data={ArrowLeft} size={18} />
        </Button>
    );
}