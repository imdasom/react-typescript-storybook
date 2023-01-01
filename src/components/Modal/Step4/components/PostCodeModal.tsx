import DaumPostcodeEmbed from 'react-daum-postcode';
import { Address } from 'react-daum-postcode/lib/loadPostcode';
import Modal from '../Modal';
import { UseModalType } from '../hooks/useModal';

interface PostCodeModalProps {
  useModalProps: UseModalType;
  onComplete: ({
    postCode,
    address,
  }: {
    postCode: string;
    address: string;
  }) => void;
}

const PostCodeModal = ({ useModalProps, onComplete }: PostCodeModalProps) => {
  const { isOpen, handleClose } = useModalProps;
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    onComplete({ postCode: data.zonecode, address: fullAddress }); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={handleClose}>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        onClose={handleClose}
        style={{ minHeight: 500 }}
      />
    </Modal>
  );
};

export default PostCodeModal;
