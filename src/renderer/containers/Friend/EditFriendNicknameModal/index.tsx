import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import Modal from '@renderer/components/Modal';
import {FormInput} from '@renderer/components/FormComponents';
import {setManagedFriend} from '@renderer/store/app';
import {AppDispatch, ManagedFriend} from '@renderer/types';

interface ComponentProps {
  close(): void;
  managedFriend: ManagedFriend;
}

const EditFriendNicknameModal: FC<ComponentProps> = ({close, managedFriend}) => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    nickname: managedFriend.nickname,
  };
  type FormValues = typeof initialValues;

  const handleSubmit = ({nickname}: FormValues): void => {
    dispatch(
      setManagedFriend({
        account_number: managedFriend.account_number,
        nickname,
      }),
    );
    close();
  };

  return (
    <Modal
      cancelButton="Cancel"
      close={close}
      header="Edit Friend Nickname"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submitButton="Save"
    >
      <FormInput focused label="Friend Nickname" name="nickname" />
    </Modal>
  );
};

export default EditFriendNicknameModal;
