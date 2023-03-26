class RenameMainChordId < ActiveRecord::Migration[4.1]
  def change
  	drop_table :main_chords
  	remove_column :ordered_chords, :main_chord_id
  	add_column :ordered_chords, :chord_name, :string, index: true
  end
end
