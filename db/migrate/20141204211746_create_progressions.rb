class CreateProgressions < ActiveRecord::Migration[4.1.7]
  def change
    create_table :progressions do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
