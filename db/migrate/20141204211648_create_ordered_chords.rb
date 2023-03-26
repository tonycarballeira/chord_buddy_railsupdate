class CreateOrderedChords < ActiveRecord::Migration[4.2]
  def change
    create_table :ordered_chords do |t|
      t.integer :order
      t.references :main_chord, index: true
      t.references :progessions, index: true

      t.timestamps
    end
  end
end
