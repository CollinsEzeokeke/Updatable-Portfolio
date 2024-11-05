import "@/styles/cardAnimation.css"

export default function WonderfulCard({ children }: { children: React.ReactNode }) {
    return( 
<div className="card">
        {children}
</div>
    )
}