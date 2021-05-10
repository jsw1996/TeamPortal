import React from "react";
import { Button, Modal } from "semantic-ui-react";
import SignInScreen from "../signin/SignInScreen";

export default function SignInModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button
          className="button"
          inverted
          color="violet"
          content="Sign in"
          icon="sign in"
          size="big"
        />
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <SignInScreen />
    </Modal>
  );
}
