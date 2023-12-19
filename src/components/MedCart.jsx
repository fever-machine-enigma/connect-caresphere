export default function MedCart({ cartItems, totalPrice }) {
  return (
    <main className="flex h-full gap-2">
      <div className="w-1/2 h-full bg-bgDark rounded-2xl">
        <div className="p-2">
          <div className="p-2">
            <h1 className="font-Inter font-bold text-4xl text-white">Cart</h1>
          </div>
          <div className="bg-bgLight h-[780px] p-4 rounded-2xl">
            {cartItems.map((item) => (
              <li key={item.id}>{item.medName}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full border-2">
        <div className="h-2/3 border-4">Hello</div>
        <div className="h-1/3 border-4">Hey</div>
      </div>
    </main>
  );
}
