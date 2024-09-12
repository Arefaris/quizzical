import Image from 'next/image';

export default function Blobs(props){
    const style = {
        position:"absolute",
        bottom:"-90px",
        left:"-10px"
    }
    return<>
        <Image
        src="/images/yellow-blob.png" 
        height={170} 
        width={170} 
        alt="Your Name"
        className="yellow-blob"
    />
        <Image
            style={props.showQ && style}
            src="/images/blue-blob.png" 
            height={200} 
            width={200} 
            alt="Your Name"
            className="blue-blob"
    />

    </>
}
  