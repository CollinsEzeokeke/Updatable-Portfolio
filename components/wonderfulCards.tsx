import "@/styles/cardAnimation.css"

export default function WonderfulCard({ children }: { children: React.ReactNode }) {
    return( 
<div className="card z-10  mobile:bg-gradient-to-r mobile:from-indigo-500 mobile:to-purple-500 mobile:h-[80vh]">
        {children}
</div>
    )
}