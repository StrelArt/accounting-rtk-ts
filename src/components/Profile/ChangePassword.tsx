import {useState} from "react";
import {changePassword} from "../../features/api/accountApi.ts";
import {useAppDispatch} from "../../app/hooks.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}:Props) => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const dispatch = useAppDispatch();

    const handleClickClear = () => {
        setConfirmPassword('');
        setNewPassword('');
        setOldPassword('');
    }


    const handleClickSave = () => {

        if(confirmPassword === newPassword) {
            dispatch(changePassword([newPassword, oldPassword]));
        }else {
            alert('Passwords do not match');
        }
        close();
    }


    return (
        <>
            <label>Old password:
                <input
                    onChange={(e) => setOldPassword(e.target.value)}
                    value={oldPassword}
                    type="password"
                />
            </label>
            <label>New password:
                <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                />
            </label>
            <label>Confirm password:
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;