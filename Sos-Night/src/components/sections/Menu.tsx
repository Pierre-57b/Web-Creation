import { menuData } from '../../data/menu';
import { AddToCartButton } from '../order/AddToCartButton';

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Notre Menu</h2>
        
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-bold mb-6 text-red-500">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.name} className="bg-black p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white flex-1 pr-4">{item.name}</h4>
                    <span className="text-red-500 font-bold whitespace-nowrap">{item.price}€</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  )}
                  {item.sauces && (
                    <div className="text-sm text-gray-400 mb-4">
                      <span className="font-semibold text-white">Sauces : </span>
                      {item.sauces.join(', ')}
                    </div>
                  )}
                  <AddToCartButton item={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}