import { Button, Modal } from "react-daisyui";

const UpdateData = ({Dialog,id}) => {
  return (
    <div>
     <Dialog className='max-w-6xl'>
     <Modal.Actions className="mt-0">
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
        <Modal.Header className="font-bold text-center">Update Art and Craft:{id}</Modal.Header>
        <Modal.Body>
            <div >

            </div>
        </Modal.Body>
       
      </Dialog>
    </div>
  );
};

export default UpdateData;
