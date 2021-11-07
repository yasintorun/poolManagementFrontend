import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'semantic-ui-react'

export default function ChangePackageButton() {
    const history = useHistory()
    const handleChangePackageClick = () => {
        history.push("/dashboard/client/choose-package")
    }
    return (

        <Button primary className="mt-4" onClick={() => handleChangePackageClick()}>Paketi Değiştir</Button>
    )
}
