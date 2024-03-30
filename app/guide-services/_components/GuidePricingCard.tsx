import { CircleCheck } from "lucide-react"; 

interface GuidePricingCardProps{
    title: string,
    priceSymbol: string,
    actualPrice: string,
    description: string,
}

export const GuidePricingCard= ({title, priceSymbol,actualPrice, description}: GuidePricingCardProps) => {
    const descriptionLines = description.split(". ");
  return (
    <div className="card max ">
      <div className="pricing-block-content">
        <p className="pricing-plan">{title}</p>
        <div className="price-value" data-currency="₹ INR" data-currency-simple="INR">
          <p className="price-number">{priceSymbol} <span className="price-integer">{actualPrice}</span></p>
          <div id="priceDiscountCent"></div>
        </div>
        <ul className="check-list" role="list">
        {descriptionLines.map((line, index) => (
              <li key={index} className="check-list-item mb-2 flex items-center"> {/* Make the list item a flex container */}
              <div className="mr-2" style={{ fontSize: "1.25rem" }}> {/* Wrap the icon inside a div and set font size */}
                <CircleCheck />
              </div>
              <span>{line}</span> {/* Use a span for the line of text */}
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};


