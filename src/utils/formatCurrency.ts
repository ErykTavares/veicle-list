const formatCurrency = (currency?: number, options?: Intl.NumberFormatOptions  ): string => {
    return  (
        (currency || 0)?.toLocaleString("pt-BR", options ||  {
            style: "currency",
            currency: "BRL",
        
        }) 
    
    )
}


export default formatCurrency