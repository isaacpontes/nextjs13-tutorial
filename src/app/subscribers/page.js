import mysql from "mysql2/promise"

function waitFor(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

export const metadata = {
  title: "Inscritos | Admin"
}

export default async function Subscribers() {
  const db = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/nextjs_tutorial")
  const [rows] = await db.query("SELECT * FROM Subscribers;")
  db.end()

  // await waitFor(5000)
  // throw new Error("Deu ruim")

  return (
    <main>
      <h1 className="text-2xl font-bold mb-8">Lista de inscritos</h1>

      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((subscriber) => (
            <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}