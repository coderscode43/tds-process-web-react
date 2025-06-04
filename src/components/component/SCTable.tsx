const SCTable = () => {
  return (
    <div className="w-full overflow-x-auto rounded-[10px] border-1 shadow-[rgb(136,136,136)_0px_5px_12px]">
      <table className="w-full border-separate border-spacing-0 text-[14px]">
        <thead className="sticky top-0 z-10 bg-[#942323] whitespace-nowrap text-white">
          <tr>
            <th className="border border-[#dddddd] p-2">Sr.No.</th>
            <th className="border border-[#dddddd] p-2">
              <input type="checkbox" id="selectAllCheckbox" />
            </th>
            <th className="border border-[#dddddd] p-2">Name</th>
            <th className="border border-[#dddddd] p-2">PAN</th>
            <th className="border border-[#dddddd] p-2">F.Y.</th>
            <th className="border border-[#dddddd] p-2">LDC Number</th>
            <th className="border border-[#dddddd] p-2">Valid From</th>
            <th className="border border-[#dddddd] p-2">Valid To</th>
            <th className="border border-[#dddddd] p-2">Section Code</th>
            <th className="border border-[#dddddd] p-2">Nature Of Payment</th>
            <th className="border border-[#dddddd] p-2">LDC Rate</th>
            <th className="border border-[#dddddd] p-2">Certificate Limit</th>
            <th className="border border-[#dddddd] p-2">Amount Consumed</th>
            <th className="border border-[#dddddd] p-2">Issue Date</th>
            <th className="border border-[#dddddd] p-2">Cancel Date</th>
            <th className="border border-[#dddddd] p-2">AS_ON Date</th>
            <th className="border border-[#dddddd] p-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">
              <input type="checkbox" />
            </td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">ABCDE1234F</td>
            <td className="border p-2">2023-24</td>
            <td className="border p-2">LDC001</td>
            <td className="border p-2">01-Apr-2023</td>
            <td className="border p-2">31-Mar-2024</td>
            <td className="border p-2">194C</td>
            <td className="border p-2">Contractor Payments</td>
            <td className="border p-2">1%</td>
            <td className="border p-2">₹5,00,000</td>
            <td className="border p-2">₹1,20,000</td>
            <td className="border p-2">10-May-2023</td>
            <td className="border p-2">—</td>
            <td className="border p-2">01-Jun-2025</td>
            <td className="border p-2">
              <button className="text-blue-600 underline">Edit</button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">
              <input type="checkbox" />
            </td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">ABCDE1234F</td>
            <td className="border p-2">2023-24</td>
            <td className="border p-2">LDC001</td>
            <td className="border p-2">01-Apr-2023</td>
            <td className="border p-2">31-Mar-2024</td>
            <td className="border p-2">194C</td>
            <td className="border p-2">Contractor Payments</td>
            <td className="border p-2">1%</td>
            <td className="border p-2">₹5,00,000</td>
            <td className="border p-2">₹1,20,000</td>
            <td className="border p-2">10-May-2023</td>
            <td className="border p-2">—</td>
            <td className="border p-2">01-Jun-2025</td>
            <td className="border p-2">
              <button className="text-blue-600 underline">Edit</button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">
              <input type="checkbox" />
            </td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">ABCDE1234F</td>
            <td className="border p-2">2023-24</td>
            <td className="border p-2">LDC001</td>
            <td className="border p-2">01-Apr-2023</td>
            <td className="border p-2">31-Mar-2024</td>
            <td className="border p-2">194C</td>
            <td className="border p-2">Contractor Payments</td>
            <td className="border p-2">1%</td>
            <td className="border p-2">₹5,00,000</td>
            <td className="border p-2">₹1,20,000</td>
            <td className="border p-2">10-May-2023</td>
            <td className="border p-2">—</td>
            <td className="border p-2">01-Jun-2025</td>
            <td className="border p-2">
              <button className="text-blue-600 underline">Edit</button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">
              <input type="checkbox" />
            </td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">ABCDE1234F</td>
            <td className="border p-2">2023-24</td>
            <td className="border p-2">LDC001</td>
            <td className="border p-2">01-Apr-2023</td>
            <td className="border p-2">31-Mar-2024</td>
            <td className="border p-2">194C</td>
            <td className="border p-2">Contractor Payments</td>
            <td className="border p-2">1%</td>
            <td className="border p-2">₹5,00,000</td>
            <td className="border p-2">₹1,20,000</td>
            <td className="border p-2">10-May-2023</td>
            <td className="border p-2">—</td>
            <td className="border p-2">01-Jun-2025</td>
            <td className="border p-2">
              <button className="text-blue-600 underline">Edit</button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">
              <input type="checkbox" />
            </td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">ABCDE1234F</td>
            <td className="border p-2">2023-24</td>
            <td className="border p-2">LDC001</td>
            <td className="border p-2">01-Apr-2023</td>
            <td className="border p-2">31-Mar-2024</td>
            <td className="border p-2">194C</td>
            <td className="border p-2">Contractor Payments</td>
            <td className="border p-2">1%</td>
            <td className="border p-2">₹5,00,000</td>
            <td className="border p-2">₹1,20,000</td>
            <td className="border p-2">10-May-2023</td>
            <td className="border p-2">—</td>
            <td className="border p-2">01-Jun-2025</td>
            <td className="border p-2">
              <button className="text-blue-600 underline">Edit</button>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">
              <input type="checkbox" />
            </td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">ABCDE1234F</td>
            <td className="border p-2">2023-24</td>
            <td className="border p-2">LDC001</td>
            <td className="border p-2">01-Apr-2023</td>
            <td className="border p-2">31-Mar-2024</td>
            <td className="border p-2">194C</td>
            <td className="border p-2">Contractor Payments</td>
            <td className="border p-2">1%</td>
            <td className="border p-2">₹5,00,000</td>
            <td className="border p-2">₹1,20,000</td>
            <td className="border p-2">10-May-2023</td>
            <td className="border p-2">—</td>
            <td className="border p-2">01-Jun-2025</td>
            <td className="border p-2">
              <button className="text-blue-600 underline">Edit</button>
            </td>
          </tr>

          {/* More static rows can be added here without loops */}
        </tbody>
      </table>
    </div>
  );
};

export default SCTable;
