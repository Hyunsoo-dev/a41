import React from 'react';
import '../../Style/Contact.scss';

type DownloadProp = {
    title: string;
}

const Download = ({title}: DownloadProp) => {

    return <div className={"download_box"}>{title} (.zip)</div>

}

export default Download;