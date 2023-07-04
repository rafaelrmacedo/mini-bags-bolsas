import Image from 'next/image'

export default function Logo() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image src="https://png.pngtree.com/png-vector/20230102/ourmid/pngtree-black-crown-icon-png-image_6549166.png" alt="Logo" width={100} height={40} />
            <span className="text-xl font-bold">Mini Bags Bolsas</span>
        </div>
    )
}