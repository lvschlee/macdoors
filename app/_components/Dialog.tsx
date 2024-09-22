import { Button, Icon, Modal, Text } from "@gravity-ui/uikit";
import "./Dialog.css";
import { Xmark } from "@gravity-ui/icons";

export default function Dialog({ open, title, children }: any) {
  return (
    <Modal open={open}>
      <div className="modal-container">
        <header className="modal-header">
          <Text variant="subheader-3">{title}</Text>
          <Button view="flat" size="l">
            <Icon data={Xmark} size={18} />
          </Button>
        </header>
        <div className="modal-body">
          <Text variant="body-2">{children}</Text>
        </div>
        <footer className="modal-footer">
          <Button size="l" view="flat-secondary">
            Отменить
          </Button>
          <Button size="l" view="action">
            Удалить
          </Button>
        </footer>
      </div>
    </Modal>
  );
}
