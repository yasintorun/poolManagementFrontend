import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'semantic-ui-react'

export default function ChangePackageButton() {
    const history = useHistory()
    const handleChangePackageClick = () => {
        history.push("/dashboard/pool-package-list")
    }
    return (
        <Button color='facebook' className="mt-1" onClick={() => handleChangePackageClick()}>Paketi Değiştir</Button>
    )
}
