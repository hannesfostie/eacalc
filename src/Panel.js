function Panel({children, title}) {
  return (
    <div className="bg-white shadow divide-y divide-gray-200 rounded mb-4">
      <h3 className="text-l p-4 pb-2">{title}</h3>
      <div class="p-4">
        {children}
      </div>
    </div>
  );
}

export default Panel;
