import { createClient } from '@/lib/supabase/server'
import HorseForm from '@/components/horses/HorseForm'

export default async function NewHorsePage() {
  const supabase = await createClient()

  // Fetch all horses for dam/sire selection
  const { data: allHorses } = await supabase
    .from('horses')
    .select('id, barn_name, registered_name, sex')
    .order('barn_name', { ascending: true })

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Add New Horse</h1>
        <p className="text-text-secondary">
          Add a horse to your breeding program
        </p>
      </div>

      <div className="panel p-6">
        <HorseForm allHorses={allHorses || []} />
      </div>
    </div>
  )
}
